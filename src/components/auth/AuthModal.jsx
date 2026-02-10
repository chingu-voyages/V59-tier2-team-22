import AuthForm from "./AuthForm";

function AuthModal({ isOpen, onClose, onSubmit, isLoading }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        {/* NEW: Pass onClose to AuthForm */}
        <AuthForm onSubmit={onSubmit} onClose={onClose} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default AuthModal;
