const Requred = ({ children }: { children: string }) => {
  return (
    <div>
      <span style={{ color: "#D14343" }}>*</span>
      {children}
    </div>
  );
};

export default Requred;
