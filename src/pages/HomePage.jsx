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
        // Seteo del video inicial con el id: 1
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
        <HomePageContainer>
            <Hero video={selectedVideo} />
            <Section>
                {['Frontend', 'Backend', 'Innovacion y Gestion'].map(category => (
                    <CategorySection key={category}>
                        <h2>{category}</h2>
                        <SectionCards>
                            {videos.filter(video => video.categoria === category).map(video => (
                                <Card
                                    key={video.id}
                                    video={video}
                                    onSelect={handleSelectVideo}
                                    onDelete={handleDelete}
                                    onEdit={handleEdit}
                                />
                            ))}
                        </SectionCards>
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
        </HomePageContainer>
    );
};

const HomePageContainer = styled.main`
    background-color: #262626;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 94px;
    padding: 100px 40px;
    max-width: 1400px;
`

const CategorySection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    >h2 {
        font-size: 32px;
        color: white;
    }
    @media (max-width: 1500px){
        max-width: 800px;
    }
`

const SectionCards = styled.section`
    display: flex;
    gap: 20px;
    overflow-x: auto;
    max-width: 1400px;
    justify-content: flex-start;
    padding: 0 20px;
`

export default HomePage;