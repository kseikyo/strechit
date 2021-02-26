import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";

import styles from "./styles";

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LevelUpModal: React.FC<LevelUpModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { level } = useContext(ChallengesContext);

  return (
    <Modal size="sm" isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent sx={{ ...styles.modalContent }}>
        <ModalHeader sx={{ ...styles.modalHeader }}>{level}</ModalHeader>
        <ModalBody sx={{ ...styles.modalBody }}>
          <Text sx={{ ...styles.modalBodyTitle }} as="strong">
            Congratulations
          </Text>
          <Text sx={{ ...styles.modalBodyText }}>
            You have achieved a new level
          </Text>
        </ModalBody>
        <ModalFooter>
          <ModalCloseButton></ModalCloseButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
