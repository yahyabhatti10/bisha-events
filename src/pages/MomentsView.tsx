import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import izBaatPakkiCover from '../assets/moments/iz-baatPakki/iz-baatPakki-cover.jpg'
import izBaatPakki1 from '../assets/moments/iz-baatPakki/iz-baatPakki-1.jpg'
import izBaatPakki2 from '../assets/moments/iz-baatPakki/iz-baatPakki-2.jpg'
import izBaatPakki3 from '../assets/moments/iz-baatPakki/iz-baatPakki-3.jpg'
import izBaatPakki4 from '../assets/moments/iz-baatPakki/iz-baatPakki-4.jpg'
import izBaatPakki5 from '../assets/moments/iz-baatPakki/iz-baatPakki-5.jpg'
import izBaatPakki6 from '../assets/moments/iz-baatPakki/iz-baatPakki-6.jpg'
import izBaatPakki7 from '../assets/moments/iz-baatPakki/iz-baatPakki-7.jpg'
import izBaatPakki8 from '../assets/moments/iz-baatPakki/iz-baatPakki-8.jpg'
import izBaatPakki9 from '../assets/moments/iz-baatPakki/iz-baatPakki-9.jpg'

import qawaliNightCover from '../assets/moments/qawaliNight/qawaliNight-cover.jpg'
import qawaliNight1 from '../assets/moments/qawaliNight/qawaliNight-1.jpg'
import qawaliNight2 from '../assets/moments/qawaliNight/qawaliNight-2.jpg'
import qawaliNight3 from '../assets/moments/qawaliNight/qawaliNight-3.jpg'
import qawaliNight4 from '../assets/moments/qawaliNight/qawaliNight-4.jpg'
import qawaliNight5 from '../assets/moments/qawaliNight/qawaliNight-5.jpg'

import walimaEventCover from '../assets/moments/walimaEvent/walimaEvent-cover.jpg';
import walimaEvent1 from '../assets/moments/walimaEvent/walimaEvent-1.jpg'
import walimaEvent2 from '../assets/moments/walimaEvent/walimaEvent-2.jpg'
import walimaEvent3 from '../assets/moments/walimaEvent/walimaEvent-3.jpg'

import baratEventCover from '../assets/moments/baratEvent-red/baratEvent-cover.jpg';
import baratEvent1 from '../assets/moments/baratEvent-red/baratEvent-1.jpg'
import baratEvent2 from '../assets/moments/baratEvent-red/baratEvent-2.jpg'
import baratEvent3 from '../assets/moments/baratEvent-red/baratEvent-3.jpg'
import baratEvent4 from '../assets/moments/baratEvent-red/baratEvent-4.jpg'

import rzEngagementCover from '../assets/moments/rz-engagement/rz-engagement-cover.jpg';
import rzEngagement1 from '../assets/moments/rz-engagement/rz-engagement-1.jpg'
import rzEngagement2 from '../assets/moments/rz-engagement/rz-engagement-2.jpg'
import rzEngagement3 from '../assets/moments/rz-engagement/rz-engagement-3.jpg'
import rzEngagement4 from '../assets/moments/rz-engagement/rz-engagement-4.jpg'
import rzEngagement5 from '../assets/moments/rz-engagement/rz-engagement-5.jpg'

import nsEngagementCover from '../assets/moments/ns-engagement/ns-engagement-cover.jpg';
import nsEngagement1 from '../assets/moments/ns-engagement/ns-engagement-1.jpg'
import nsEngagement2 from '../assets/moments/ns-engagement/ns-engagement-2.jpg'
import nsEngagement3 from '../assets/moments/ns-engagement/ns-engagement-3.jpg'
import nsEngagement4 from '../assets/moments/ns-engagement/ns-engagement-4.jpg'
import nsEngagement5 from '../assets/moments/ns-engagement/ns-engagement-5.jpg'
import nsEngagement6 from '../assets/moments/ns-engagement/ns-engagement-6.jpg'
import nsEngagement7 from '../assets/moments/ns-engagement/ns-engagement-7.jpg'
import nsEngagement8 from '../assets/moments/ns-engagement/ns-engagement-8.jpg'

import tableDecorCover from '../assets/moments/tableDecor/tableDecor-cover.jpg';
import tableDecor1 from '../assets/moments/tableDecor/tableDecor-1.jpg'
import tableDecor2 from '../assets/moments/tableDecor/tableDecor-2.jpg'
import tableDecor3 from '../assets/moments/tableDecor/tableDecor-3.jpg'

import fatimaMehandiCover from '../assets/moments/fatimaMehandi/fatimaMehandi-cover.jpg';
import fatimaMehandi1 from '../assets/moments/fatimaMehandi/fatimaMehandi-1.jpg'
import fatimaMehandi2 from '../assets/moments/fatimaMehandi/fatimaMehandi-2.jpg'
import fatimaMehandi3 from '../assets/moments/fatimaMehandi/fatimaMehandi-3.jpg'
import fatimaMehandi4 from '../assets/moments/fatimaMehandi/fatimaMehandi-4.jpg'
import fatimaMehandi5 from '../assets/moments/fatimaMehandi/fatimaMehandi-5.jpg'
import fatimaMehandi6 from '../assets/moments/fatimaMehandi/fatimaMehandi-6.jpg'
import fatimaMehandi7 from '../assets/moments/fatimaMehandi/fatimaMehandi-7.jpg'

import mandyCover from '../assets/moments/mandy/mandy-cover.jpg';
import mandy1 from '../assets/moments/mandy/mandy-1.jpg'
import mandy2 from '../assets/moments/mandy/mandy-2.jpg'
import mandy3 from '../assets/moments/mandy/mandy-3.jpg'
import mandy4 from '../assets/moments/mandy/mandy-4.jpg'
import mandy5 from '../assets/moments/mandy/mandy-5.jpg'
import mandy6 from '../assets/moments/mandy/mandy-6.jpg'
import mandy7 from '../assets/moments/mandy/mandy-7.jpg'
import mandy8 from '../assets/moments/mandy/mandy-8.jpg'



const MomentsView = () => {
    // Use useParams with a type for galleryId
    const { galleryId } = useParams<{ galleryId: string }>();

    // Define the galleries with their respective keys and data
    const galleries = {
        "iz-baatPakki": {
            title: "IZ - Baat Pakki",
            description: "A beautiful royal wedding captured in all its splendor.",
            images: [
                izBaatPakkiCover,
                izBaatPakki1,
                izBaatPakki2,
                izBaatPakki3,
                izBaatPakki4,
                izBaatPakki5,
                izBaatPakki6,
                izBaatPakki7,
                izBaatPakki8,
                izBaatPakki9,
            ],
        },
        "qawali-night": {
            title: "Qawali Night",
            description: "A lush garden reception full of vibrant colors and elegant details.",
            images: [
                qawaliNightCover,
                qawaliNight1,
                qawaliNight2,
                qawaliNight3,
                qawaliNight4,
                qawaliNight5,
            ],
        },
        "walima-event": {
            title: "Walima Event",
            description: "An elegant Walima celebration capturing heartfelt moments.",
            images: [
                walimaEventCover,
                walimaEvent1,
                walimaEvent2,
                walimaEvent3,
            ],
        },
        "barat-event": {
            title: "Barat Event",
            description: "A grand Barat event capturing the joy and vibrancy of the festivities.",
            images: [
                baratEventCover,
                baratEvent1,
                baratEvent2,
                baratEvent3,
                baratEvent4,
            ],
        },
        "rz-engagement": {
            title: "R&Z Engagement",
            description: "An intimate and stylish engagement event capturing modern romance.",
            images: [
                rzEngagementCover,
                rzEngagement1,
                rzEngagement2,
                rzEngagement3,
                rzEngagement4,
                rzEngagement5,
            ],
        },
        "ns-engagement": {
            title: "N&S Engagement",
            description: "A charming engagement event filled with tradition and elegance.",
            images: [
                nsEngagementCover,
                nsEngagement1,
                nsEngagement2,
                nsEngagement3,
                nsEngagement4,
                nsEngagement5,
                nsEngagement6,
                nsEngagement7,
                nsEngagement8,
            ],
        },
        "table-decor": {
            title: "Table Decor",
            description: "Beautiful table decor designs that set the perfect ambiance.",
            images: [
                tableDecorCover,
                tableDecor1,
                tableDecor2,
                tableDecor3,
            ],
        },
        "fatima-mehandi": {
            title: "Fatima's Mehandi",
            description: "Stunning Fatima's Mehandi designs capturing intricate artistry.",
            images: [
                fatimaMehandiCover,
                fatimaMehandi1,
                fatimaMehandi2,
                fatimaMehandi3,
                fatimaMehandi4,
                fatimaMehandi5,
                fatimaMehandi6,
                fatimaMehandi7,
            ],
        },
        "mandy": {
            title: "Maryam & Yawar",
            description: "A delightful celebration of love and togetherness.",
            images: [
                mandyCover,
                mandy1,
                mandy2,
                mandy3,
                mandy4,
                mandy5,
                mandy6,
                mandy7,
                mandy8,
            ],
        },
    };

    // Cast galleryId to a key of galleries
    const gallery = galleryId ? galleries[galleryId as keyof typeof galleries] : null;

    // Scroll to the top when galleryId changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [galleryId]);

    if (!gallery) {
        return (
            <div className="pt-20">
                <div className="container-custom py-20 text-center">
                    <h1 className="text-3xl font-garamond text-golden">Gallery not found</h1>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-20">
            {/* Gallery Header */}
            <section className="py-20 bg-golden/5">
                <div className="container-custom px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl mx-auto text-center px-4"
                    >
                        <h1 className="text-5xl font-garamond text-golden mb-4">{gallery.title}</h1>
                        <p className="text-gray-600 mb-4">{gallery.description}</p>
                    </motion.div>
                </div>
            </section>

            {/* Image Grid */}
            <section className="py-20">
                <div className="container-custom px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gallery.images.map((image: string, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="aspect-square overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={image}
                                    alt={`${gallery.title} - Image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MomentsView;
