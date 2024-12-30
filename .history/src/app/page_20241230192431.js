import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">
                GPT4o Image Analyzer
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Analyze images and text effortlessly!
            </p>
            {/* Add navigation link */}
            <Link href="/vision">
                <a className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Start Analyzing
                </a>
            </Link>
        </div>
    );
}


