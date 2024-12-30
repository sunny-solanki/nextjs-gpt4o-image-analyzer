import Image from "next/image";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                GPT4o Image Analyzer
            </h1>
            <p className="text-lg text-gray-700">Analyze images and text effortlessly!</p>
        </div>
    );
}

