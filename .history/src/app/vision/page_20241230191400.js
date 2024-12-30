"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaSpinner, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const Vision = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const formik = useFormik({
        initialValues: {
            text: "",
            image_url: "",
        },
        validationSchema: Yup.object({
            text: Yup.string().required("Text is required"),
            image_url: Yup.string().url("Invalid URL").required("Image URL is required"),
        }),
        onSubmit: async (values) => {
            setLoading(true), setError(null), setResponse(null);
            try {
                const res = await fetch('/api/vision', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(values),
                });
                if (!res.ok) {
                    throw new Error("Failed to fetch the response");
                }
                const data = await res.json();
                setResponse(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <h1 className="text-3xl font-bold text-blue-600 mb-6">Image Analyzer</h1>
            <form
                onSubmit={formik.handleSubmit}
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
            >
                <textarea
                    name="text"
                    placeholder="Enter Text here"
                    {...formik.getFieldProps("text")}
                    className="w-full p-2 border rounded-lg mb-4"
                ></textarea>
                <input
                    name="image_url"
                    {...formik.getFieldProps("image_url")}
                    placeholder="Enter image URL"
                    className="w-full p-2 border rounded-lg mb-4"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                    {loading ? <FaSpinner className="animate-spin inline" /> : "Get Response"}
                </button>
            </form>

            {error && (
                <div className="mt-4 text-red-500 flex items-center">
                    <FaExclamationCircle className="mr-2" /> {error}
                </div>
            )}

            {response && (
                <div className="mt-8 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-lg font-semibold text-gray-700">Response</h2>
                    {response?.message?.content && (
                        <p className="mt-2 text-gray-600">{response?.message?.content}</p>
                    )}
                    {formik?.values?.image_url && (
                        <img
                            src={formik?.values?.image_url}
                            alt="Analyzed"
                            className="mt-4 w-full rounded-lg"
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Vision;
