"use client";
import React from "react";
import {useEffect, useState} from "react";

interface LogItem {
    id: number;
    event: string;
    details: string | null;
    createdAt: string;
}


export default function Logs() {

    const [logs, setLogs] = useState<LogItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLogs() {
            try {
                const response = await fetch(
                    "https://server.morellijoseph.com/api/admin/morelli/logs"
                );

                if (!response.ok) {
                    throw new Error(`Server returned status ${response.status}`);
                }

                const data: LogItem[] = await response.json();

                const sortedLogs = data.sort(
                    (a, b) =>
                        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                );

                setLogs(sortedLogs);
            } catch (err) {
                const errorLog: LogItem = {
                    id: 0,
                    event: "Mercury is (probably) down...",
                    details: "Failed to connect to morelliServer... Fun fact: My 3x3 Rubik's cube solve time is 26.54 seconds",
                    createdAt: new Date().toISOString(),
                };
                setLogs([errorLog]);

                if (err instanceof Error) {
                    setError(err.message);
                } else {

                    setError("An unexpected error occurred");
                }
            } finally {
                // setIsLoading(false);
            }
        }

        fetchLogs();
    }, []);

    return (
        <div
            style={{
                padding: "2rem",
                gap: "2rem",
                alignItems: "center",
            }}
        >
            <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
                style={{
                    marginTop: "2rem",
                }}
            >
                <div className="lg:col-span-4">
                    <div
                        className="w-[75px] h-[5px] mt-2 rounded-full"
                    />
                </div>

                <div className="lg:col-span-8">
                    <div className="space-y-8" style={{marginRight: "2rem", width: "80%"}}>
                        <h1 style={{fontSize: "1.25rem", fontWeight: "bold"}}>
                            June 16th 2026
                        </h1>
                        <p style={{marginBottom: "2rem"}}>Now completely self-hosted!</p>
                        {logs.map((log) => (
                            <div key={log.id}
                            >
                                <div>
                <span className="font-mono text-xs font-bold text-blue-600">
                  [{log.event}]
                </span>
                                    <p className="mt-1 text-sm">{log.details ?? "No details provided"}</p>
                                </div>
                                <time className="text-xs text-gray-400">
                                    {new Date(log.createdAt).toLocaleString()}
                                </time>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}
