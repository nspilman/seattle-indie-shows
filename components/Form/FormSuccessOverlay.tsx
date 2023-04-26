import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";

interface SubmissionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmissionOverlay: React.FC<SubmissionOverlayProps> = ({
  isOpen,
  onClose,
}) => {
  const leastDestructiveRef = useRef(null);
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      leastDestructiveRef={leastDestructiveRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Submission Successful
          </AlertDialogHeader>

          <AlertDialogBody>
            Your form has been successfully submitted. Thank you for your
            submission!
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button colorScheme="green" onClick={onClose} ml={3}>
              Close
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
