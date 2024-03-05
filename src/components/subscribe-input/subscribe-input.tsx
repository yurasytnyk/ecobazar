export const SubscribeInput = () => {
  return (
    <div className="flex focus-within:outline-blue-600 focus-within:outline focus-within:rounded-10.5xl bg-white rounded-3xl">
      <input
        type="text"
        placeholder="Your email address"
        className="py-3.5 rounded-tl-3xl rounded-bl-3xl pl-6 pr-2 w-full focus:outline-none"
      />

      <button
        className="btn btn-success focus:outline-blue-50"
        aria-label="subscribe to newsletters"
      >
        Subscribe
      </button>
    </div>
  );
};
