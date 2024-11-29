import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function UploadLayout() {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle the dropped files
    const files = Array.from(e.dataTransfer.files);
    console.log('Dropped files:', files);
  };

  return (
    <div 
      className="flex-1 w-full p-6"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div 
        className={`h-full w-full rounded-lg border-2 border-dashed flex items-center justify-center
          ${isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}`}
      >
        <div className="flex flex-col items-center gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full w-16 h-16"
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            <PlusIcon className="h-8 w-8" />
          </Button>
          <p className="text-muted-foreground text-sm">
            Drop your document here or click to upload
          </p>
          <input 
            type="file" 
            id="fileInput" 
            className="hidden" 
            onChange={(e) => console.log('Selected files:', e.target.files)}
          />
        </div>
      </div>
    </div>
  );
}
