import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { VideoContext } from '../context/VideoContext';

const HomePage = () => {
    const { videos, deleteVideo, updateVideo } = useContext(VideoContext);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editVideo, setEditVideo] = useState(null);

    useEffect(() => {
        // Set the initial video to the one with id: 1
        const initialVideo = videos.find(video => video.id === 1);
        setSelectedVideo(initialVideo);
    }, [videos]);

    const handleSelectVideo = (video) => {
        setSelectedVideo(video);
    };

    const handleDelete = (id) => {
        deleteVideo(id);
    };

    const handleEdit = (video) => {
        setEditVideo(video);
        setIsModalOpen(true);
    };

    const handleSave = (updatedVideo) => {
        updateVideo(updatedVideo);
        setIsModalOpen(false);
    };

    return (
        <div>
            <Hero video={selectedVideo} />
            <Section>
                {['Frontend', 'Backend', 'Innovacion y Gestion'].map(category => (
                    <CategorySection key={category}>
                        <h2>{category}</h2>
                        {videos.filter(video => video.categoria === category).map(video => (
                            <Card
                                key={video.id}
                                video={video}
                                onSelect={handleSelectVideo}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))}
                    </CategorySection>
                ))}
            </Section>
            {isModalOpen && (
                <Modal
                    video={editVideo}
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CategorySection = styled.div`
  width: 30%;
`;

export default HomePage;
