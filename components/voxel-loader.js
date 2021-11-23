import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import Voxel from "./Voxel";

export const VoxelSpinner = () => (
  <Spinner
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

// eslint-disable-next-line react/display-name
export const VoxelContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel"
    m="auto"
    mb={["-50px", "-150px", "-200px"]}
    minW={[280, 375, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </Box>
));

const Loader = () => {
  return (
    <VoxelContainer>
      <Voxel />
    </VoxelContainer>
  );
};

export default Loader;
