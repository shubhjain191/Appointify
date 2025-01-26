import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
            _id: 'doc1',
            name: 'Dr. James Wilson',
            image: doc1,
            speciality: 'General physician',
            degree: 'MBBS, MD',
            experience: '8 Years',
            about: 'Dr. Wilson specializes in preventive healthcare and management of chronic conditions. With expertise in diagnostic medicine, he focuses on providing comprehensive care through detailed patient assessment and personalized treatment plans.',
            fees: 800,
            address: {
                line1: '2234 Oak Street',
                line2: 'San Francisco, CA'
            }
    },
    {
            _id: 'doc2',
            name: 'Dr. Priya Malhotra',
            image: doc2,
            speciality: 'Gynecologist',
            degree: 'MBBS, MS, DNB',
            experience: '2 Years',
            about: 'Dr. Malhotra is known for her expertise in womens health and reproductive medicine. She specializes in high-risk pregnancies and minimally invasive gynecological procedures, ensuring comprehensive care for her patients.',
            fees: 1200,
            address: {
                line1: 'Pali Hill, Bandra West',
                line2: 'Mumbai, Maharashtra'
            }
    },
        {
            _id: 'doc3',
            name: 'Dr. Andrew Thompson',
            image: doc3,
            speciality: 'Dermatologist',
            degree: 'MBBS, MD (Dermatology)',
            experience: '6 Years',
            about: 'Dr. Thompson combines traditional dermatological treatments with modern cosmetic procedures. She specializes in treating various skin conditions and providing advanced skincare solutions.',
            fees: 1500,
            address: {
                line1: '1456 Pine Avenue',
                line2: 'Boston, MA'
            }
        },
        {
            _id: 'doc4',
            name: 'Dr. Rahul Verma',
            image: doc4,
            speciality: 'Pediatricians',
            degree: 'MBBS, DCH, DNB',
            experience: '9 Years',
            about: 'Dr. Verma specializes in child healthcare and development. His approach combines modern pediatric practices with a deep understanding of child psychology, ensuring comprehensive care for young patients.',
            fees: 900,
            address: {
                line1: 'Worli Sea Face Road',
                line2: 'Mumbai, Maharashtra'
            }
        },
        {
            _id: 'doc5',
            name: 'Dr. Sarah Mitchell',
            image: doc5,
            speciality: 'Pediatricians',
            degree: 'MBBS, MD, DM',
            experience: '1 Years',
            about: 'Dr. Mitchell is an expert in treating complex neurological disorders. Her research-based approach and extensive experience help in managing various neurological conditions effectively.',
            fees: 500,
            address: {
                line1: '789 Madison Avenue',
                line2: 'New York, NY'
            }
        },
        {
            _id: 'doc6',
            name: 'Dr. Amit Sharma',
            image: doc6,
            speciality: 'Gastroenterologist',
            degree: 'MBBS, MD, DM',
            experience: '5 Years',
            about: 'Dr. Sharma specializes in digestive health and gastrointestinal disorders. His expertise includes advanced endoscopic procedures and management of complex GI conditions.',
            fees: 1000,
            address: {
                line1: 'Juhu Beach Road',
                line2: 'Mumbai, Maharashtra'
            }
        },
        {
            _id: 'doc7',
            name: 'Dr. Michael Anderson',
            image: doc7,
            speciality: 'General physician',
            degree: 'MBBS, DNB',
            experience: '10 Years',
            about: 'Dr. Anderson focuses on holistic healthcare and preventive medicine. His patient-centered approach emphasizes lifestyle modifications and comprehensive health management.',
            fees: 1500,
            address: {
                line1: '567 Beverly Hills Drive',
                line2: 'Los Angeles, CA'
            }
        },
        {
            _id: 'doc8',
            name: 'Dr. Anjali Desai',
            image: doc8,
            speciality: 'Gynecologist',
            degree: 'MBBS, DGO, MD',
            experience: '4 Years',
            about: 'Dr. Desai specializes in reproductive endocrinology and infertility treatments. Her expertise includes advanced laparoscopic surgeries and high-risk obstetric care.',
            fees: 1400,
            address: {
                line1: 'Napean Sea Road',
                line2: 'Mumbai, Maharashtra'
            }
        },
        {
            _id: 'doc9',
            name: 'Dr. William Parker',
            image: doc9,
            speciality: 'Dermatologist',
            degree: 'MBBS, DVD',
            experience: '6 Years',
            about: 'Dr. Parker combines aesthetic dermatology with clinical expertise. He specializes in both medical and cosmetic dermatology, offering comprehensive skin care solutions.',
            fees: 1300,
            address: {
                line1: '890 Michigan Avenue',
                line2: 'Chicago, IL'
            }
        },
        {
            _id: 'doc10',
            name: 'Dr. Vikram Mehta',
            image: doc10,
            speciality: 'Pediatricians',
            degree: 'MBBS, MD Pediatrics',
            experience: '6 Years',
            about: 'Dr. Mehta specializes in pediatric critical care and developmental disorders. His gentle approach and expertise make him a trusted choice for child healthcare.',
            fees: 1000,
            address: {
                line1: 'Peddar Road',
                line2: 'Mumbai, Maharashtra'
            }
        },
        {
            _id: 'doc11',
            name: 'Dr. Emily Roberts',
            image: doc11,
            speciality: 'Neurologist',
            degree: 'MBBS, DM Neurology',
            experience: '2 Years',
            about: 'Dr. Roberts is known for her expertise in treating neurological disorders and stroke management. Her approach combines clinical excellence with compassionate care.',
            fees: 700,
            address: {
                line1: '432 Park Avenue',
                line2: 'Seattle, WA'
            }
        },
        {
            _id: 'doc12',
            name: 'Dr. Rajesh Kumar',
            image: doc12,
            speciality: 'Gastroenterologist',
            degree: 'MBBS, MD, DM',
            experience: '6 Years',
            about: 'Dr. Kumar specializes in advanced endoscopy and therapeutic procedures. His expertise covers a wide range of digestive system disorders and their management.',
            fees: 1600,
            address: {
                line1: 'Colaba Causeway',
                line2: 'Mumbai, Maharashtra'
            }
        },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Evans has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1000,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan is a specialists in womens reproductive health, they provide care for conditions like menstrual disorders, pregnancy, and menopause, ensuring overall well-being for women.',
        fees: 900,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Hill has a strong commitment to delivering comprehensive skin, hair, and nail health, they diagnose and treat issues like acne, eczema, and skin cancer for improved appearance and health.',
        fees: 800,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]