const AddTransaction = () => {
  return (
    <button
      className="bg-secondary-card-background py-3 px-8 rounded-4xl text-sm cursor-pointer
      shadow-[inset_0_0_2px_1px_rgb(255,255,255)] relative z-10 hidden lg:flex-center gap-1.5"
    >
      <div className="button-gradient"  />

      <div 
        className="size-4.5 bg-white rounded-full" 
        style={{
          clipPath: "path('M 9 0 A 9 9 0 1 1 8.99 0 Z M 8 5 L 8 8 L 5 8 L 5 10 L 8 10 L 8 13 L 10 13 L 10 10 L 13 10 L 13 8 L 10 8 L 10 5 Z')",
        }}
      />
    </button>
  )
}

export default AddTransaction;