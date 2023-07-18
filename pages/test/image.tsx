import ImageUploader from "@components/ImageUploader";
const Page = () => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <ImageUploader isEdit={true} />
    </div>
  );
};
export default Page;
