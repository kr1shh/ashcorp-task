'use client'


const Button = ({
  children,
  display="flex",
  width = "auto",
  height = "auto",
  paddingX = "0",
  paddingY = "0",
  bgColor = "transparent",
  textColor = "white",
  fontFamily = "poppins",
  borderRadius = "0",
  justifyContent = "center",
  alignItems = "center",
  flexDirection = "row",
  gap = "0",
}) => {

  return (
    <>
      <button
        style={{
          display: display,
          width: width,
          height: height,
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
          backgroundColor: bgColor,
          color: textColor,
          fontFamily: fontFamily,
          borderRadius: borderRadius,
          justifyContent: justifyContent,
          alignItems: alignItems,
          flexDirection: flexDirection,
          gap: "10",
        }}
      >
        {children}
      </button>
    </>
  );
};

export default Button