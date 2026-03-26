interface NoteProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
}

export default function Note({ title = "Nota", icon = "info", children }: NoteProps) {
  return (
    <div className="bg-[#f7f7f7] border-l-4 border-[#141414] p-5 my-8 rounded-r-lg">
      <div className="flex gap-3">
        <span className="material-symbols-outlined text-[#141414]">{icon}</span>
        <div>
          <p className="font-bold text-sm mb-1 text-[#141414]">{title}</p>
          <p className="text-sm text-[#757575]">{children}</p>
        </div>
      </div>
    </div>
  );
}
