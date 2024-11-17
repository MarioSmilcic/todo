import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";
import Backdrop from "./Backdrop";
import { useModal } from "./hooks/useModal";
import { modalVariants } from "../../utils/animations/variants";

const Modal = () => {
  const { modal, closeModal, handleAction, modalContent } = useModal();

  if (!modal.isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      {modal.isOpen && (
        <Backdrop onCancel={closeModal}>
          <motion.div
            className={`modal ${modal.type === "delete" ? "delete-modal" : ""}`}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-labelledby="modalTitle"
          >
            <motion.h3
              id="modalTitle"
              className="modal_title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {modalContent.title}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {modalContent.content}
            </motion.div>
            <motion.div
              className="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Button text="Confirm" handleClick={handleAction} />
              <Button text="Dismiss" handleClick={closeModal} />
            </motion.div>
          </motion.div>
        </Backdrop>
      )}
    </AnimatePresence>
  );
};

export default Modal;
