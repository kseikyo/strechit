import {
  ModalBodyProps,
  ModalContentProps,
  ModalHeaderProps,
  TextProps,
} from "@chakra-ui/react";

const modalContent = {
  w: "100%",
  py: "2rem",
  px: "3rem",
  alignContent: "center",
  alignItems: "center",
} as ModalContentProps;

const modalHeader = {
  w: "100%",
  textAlign: "center",
  fontSize: "8.75rem",
  fontWeight: "semibold",
  color: "brand.blue",
  bg: "url('/icons/levelup.svg') no-repeat center",
  bgSize: "contain",
} as ModalHeaderProps;

const modalBody = {
  d: "flex",
  flexDir: "column",
  justifyContent: "center",
  alignItems: "center",
} as ModalBodyProps;

const modalBodyTitle = {
  textAlign: "center",
  color: "brand.title",
  fontSize: "xl",
} as TextProps;

const modalBodyText = {
  mt: "0.25rem",
  textAlign: "center",
} as TextProps;

const styles = {
  modalContent,
  modalHeader,
  modalBody,
  modalBodyTitle,
  modalBodyText,
};

export default styles;
