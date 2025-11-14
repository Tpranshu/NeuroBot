
import { IKContext, IKImage, IKUpload } from "imagekitio-react";
  

const urlEndpoint = import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT;
const publicKey = import.meta.env.VITE_IMAGEKIT_PUBLIC_KEY;

const authenticator = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/upload");

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Request failed with status ${response.status}: ${errorText}`);
    }

    const { signature, expire, token } = await response.json();
    return { signature, expire, token };
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

const Upload = () => {
  const onError = (err) => console.error("Upload Error:", err);
  const onSuccess = (res) => console.log("Upload Success:", res);
  const onUploadProgress = (progress) => console.log("Upload Progress:", progress);
  const onUploadStart = (evt) => {
    const file = evt.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      // eslint-disable-next-line no-undef
      setImg((prev) => ({
        ...prev,
        isLoading: true,
        aiData: {
          inlineData: {
            data: reader.result.split(",")[1],
            mimeType: file.type,
          },
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <IKContext
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        fileName="upload-test.png"
        onError={onError}
        onSuccess={onSuccess}
        useUniqueFileName={true}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
         style={{ display: "none" }}
        ref={IKUpload}
      />
        {
        <label onClick={() => IKUpload.current.click()}>
          <img src="/attachment.png" alt="" />
        </label>
      }
    </IKContext>
  );
};

export default Upload;

