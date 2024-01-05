const Required = ({ children }: { children?: string }) => {
  return (
    <div>
      <span style={{ color: "#D14343" }}>*</span>
      {children}
    </div>
  );
};

export default Required;
