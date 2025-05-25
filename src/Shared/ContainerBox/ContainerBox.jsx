/* eslint-disable react/prop-types */
const ContainerBox = ({ children }) => {
  return (
    <div className="mx-auto max-w-[1600px] lg:px-7 md:px-3 px-2 ">
      {children}
    </div>
  );
};

export default ContainerBox;
