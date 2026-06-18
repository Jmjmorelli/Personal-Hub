'use client'
import { Component } from "react";
import Header from "../components/Header";
import Link from 'next/link'

export default function Projects() {

    return (
        <div
            style={{
                padding: "2rem",
                gap: "2rem",
                alignItems: "center"
            }}>
            <Header />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start" style={{
                marginTop: "2rem"
            }}>

                <div className="lg:col-span-4">
                    <div
                        className="w-[75px] h-[5px] mt-2 rounded-full"
                    // style={{backgroundColor: "#dbc1ac"}}
                    // style={`background-color: ${siteConfig.accentColor}`}
                    />
                </div>

                <div className="lg:col-span-8">
                    <div className="space-y-8" >

                        <a href="https://luxxbeebeauty.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="group relative" style={{ paddingBottom: "2rem", cursor: "pointer" }}>
                                <div style={{ padding: "1rem" }}
                                    className={`block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${true
                                        ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                                        : ""
                                        }`}
                                >
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center justify-center" style={{ color: "#dbc1ac", fontWeight: "bold" }}>
                                        luxxbeebeauty.com
                                    </div>

                                    <div className="space-y-4">
                                        <div >
                                            <span
                                                className="text-sm font-mono"
                                                style={{ color: "#dbc1ac", fontWeight: "bold" }}
                                            >
                                                01
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold mt-1" >
                                                LuxxBeeBeauty
                                            </h3>
                                        </div>

                                        <p
                                            className={`text-base sm:text-lg text-gray-600 leading-relaxed ${true ? "pr-12 sm:pr-14 md:pr-16" : ""}`}
                                        >
                                            Lashes & Hair Salon | last updated June 7th 2026
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">

                                            <span style={{ padding: "5px" }}
                                                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${true ? "group-hover:bg-gray-800" : ""
                                                    }`}
                                            >
                                                NextJS
                                            </span>

                                            <span style={{ padding: "5px" }}
                                                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${true ? "group-hover:bg-gray-800" : ""
                                                    }`}
                                            >
                                                Turso + Drizzle ORM
                                            </span>

                                        </div>
                                    </div>


                                </div>

                            </div>
                        </a>

                           <a href="https://klawsbykai.com"
                            target="_blank"
                            rel="noopener noreferrer">
                            <div className="group relative" style={{ paddingBottom: "2rem", cursor: "pointer" }}>
                                <div style={{ padding: "1rem" }}
                                    className={`block relative p-4 sm:p-6 md:p-8 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200 transition-all duration-300 ${true
                                        ? "hover:bg-white hover:shadow-xl hover:border-gray-300 hover:-translate-y-1"
                                        : ""
                                        }`}
                                >
                                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 flex items-center justify-center" style={{ color: "#dbc1ac", fontWeight: "bold" }}>
                                        klawsbykai.com
                                    </div>

                                    <div className="space-y-4">
                                        <div >
                                            <span
                                                className="text-sm font-mono"
                                                style={{ color: "#dbc1ac", fontWeight: "bold" }}
                                            >
                                                02
                                            </span>
                                            <h3 className="text-xl sm:text-2xl font-bold mt-1" >
                                                Klaws By Kai
                                            </h3>
                                        </div>

                                        <p
                                            className={`text-base sm:text-lg text-gray-600 leading-relaxed ${true ? "pr-12 sm:pr-14 md:pr-16" : ""}`}
                                        >
                                            Nail Salon | last updated June 18th 2026
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">

                                            <span style={{ padding: "5px" }}
                                                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${true ? "group-hover:bg-gray-800" : ""
                                                    }`}
                                            >
                                                NextJS
                                            </span>

                                            <span style={{ padding: "5px" }}
                                                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-900 text-white rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${true ? "group-hover:bg-gray-800" : ""
                                                    }`}
                                            >
                                                Turso + Drizzle ORM
                                            </span>

                                        </div>
                                    </div>


                                </div>

                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
}