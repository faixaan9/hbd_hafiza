
import React, { useState, useRef } from 'react';
import { editImageWithGemini } from '../services/geminiService';

const MagicImageEditor: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMagic = async () => {
    if (!image || !prompt) return;
    setIsProcessing(true);
    try {
      // Remove data:image/png;base64, prefix
      const base64Data = image.split(',')[1];
      const edited = await editImageWithGemini(base64Data, prompt);
      setResult(edited);
    } catch (err) {
      alert("The stars are currently misaligned. Try again in a moment.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-romantic text-pink-600 mb-2">The Birthday Mirror</h2>
        <p className="text-gray-500">Upload a photo and wish for a magical change... (Retro vibes? A birthday hat? Sparkles?)</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="aspect-square bg-pink-50 rounded-2xl border-4 border-dashed border-pink-200 flex items-center justify-center cursor-pointer overflow-hidden group relative"
          >
            {image ? (
              <>
                <img src={image} alt="Original" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="text-white text-sm">Change Photo</span>
                </div>
              </>
            ) : (
              <div className="text-center p-4">
                <i className="fas fa-camera text-4xl text-pink-300 mb-2"></i>
                <p className="text-pink-400 text-sm">Tap to upload a memory</p>
              </div>
            )}
          </div>
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            className="hidden" 
            accept="image/*"
          />
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input 
              type="text" 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Your magical wish... (e.g. 'Add a retro pink filter')"
              className="w-full p-4 pr-12 rounded-2xl bg-white border-2 border-pink-100 focus:border-pink-500 focus:outline-none transition-all shadow-inner"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-300">
              <i className="fas fa-magic"></i>
            </div>
          </div>

          <button 
            onClick={handleMagic}
            disabled={!image || !prompt || isProcessing}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-rose-200 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:translate-y-0"
          >
            {isProcessing ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-circle-notch fa-spin mr-2"></i> Invoking Magic...
              </span>
            ) : "Cast Spell ✨"}
          </button>

          {result && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-center text-pink-600 font-romantic text-2xl mb-4">Ta-da! ✨</p>
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img src={result} alt="Edited" className="w-full" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicImageEditor;
