import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../views/dashboard";
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'

const RoutesApp = (): React.ReactElement => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default RoutesApp;
