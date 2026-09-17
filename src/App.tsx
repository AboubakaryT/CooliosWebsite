import { useState } from "react";
import Desktop from "./components/Desktop";
import Modal, { type ModalType } from "./components/Modal";

function App() {
  const [activeModal, setActiveModal] =
    useState<ModalType>(null);

  const [darkMode, setDarkMode] =
    useState(false);

  return (
    <main
      className={`page ${
        darkMode ? "dark-mode" : ""
      }`}
    >
      <Desktop
        onOpen={setActiveModal}
        darkMode={darkMode}
        onToggleTheme={() =>
          setDarkMode((current) => !current)
        }
      />

      <Modal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </main>
  );
}

export default App;