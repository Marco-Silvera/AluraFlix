import React, { createContext, useState, useEffect } from 'react';
import data from '../db.json';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(data.videos);
    }, []);

    const addVideo = (newVideo) => {
        setVideos([...videos, newVideo]);
    };

    const deleteVideo = (id) => {
        setVideos(videos.filter(video => video.id !== id));
    };

    const updateVideo = (updatedVideo) => {
        setVideos(videos.map(video => (video.id === updatedVideo.id ? updatedVideo : video)));
    };

    return (
        <VideoContext.Provider value={{ videos, addVideo, deleteVideo, updateVideo }}>
            {children}
        </VideoContext.Provider>
    );
};
