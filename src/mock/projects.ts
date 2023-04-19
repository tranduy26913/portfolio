import mernStack from '../assets/oes/mern.png'
import redux from '../assets/oes/redux.webp'
import mui from '../assets/oes/mui.png'
import homeOES from '../assets/oes/thumb.png'
import reactQuery from '../assets/novel/zustand.svg'
import homeLib from '../assets/library/thumb.jpg'
import mySQL from '../assets/library/mysql.png'
import homeNovel from '../assets/novel/thumb.jpg'
import java from '../assets/library/java.png'
import csharp from '../assets/hotel/csharp.png'
import sql from '../assets/hotel/sql.png'
import servlet from '../assets/servlet/javaservlet.png'

import oes1 from '../assets/oes/img1.jpg'
import oes2 from '../assets/oes/img2.jpg'
import oes3 from '../assets/oes/img3.jpg'
import oes4 from '../assets/oes/img4.jpg'
import oes5 from '../assets/oes/img5.jpg'

import homePortfolio from '../assets/thumb-portfolio.jpg'
import vue from '../assets/vue.svg'
import tailwind from '../assets/tailwind.png'

//Hotel Management

import homeHotel from '../assets/hotel/thumb.jpg'
import hotel1 from '../assets/hotel/booking.png'
import hotel2 from '../assets/hotel/img2.jpg'
import hotel3 from '../assets/hotel/img3.jpg'
import hotel4 from '../assets/hotel/img4.jpg'

//library
import lib1 from '../assets/library/img1.jpg'
import lib2 from '../assets/library/img2.jpg'
import lib3 from '../assets/library/img3.jpg'
import lib4 from '../assets/library/img4.jpg'
import lib5 from '../assets/library/img5.jpg'

//novel
import novel1 from '../assets/novel/img1.jpg'
import novel2 from '../assets/novel/img2.jpg'
import novel3 from '../assets/novel/img3.jpg'

export const listProject = [
    {
        id: 1,
        name: 'Online Examination System',
        thumbnail: homeOES,
        description: 'Website to support the learning process for students and faculty. The site allows teachers to create courses, tests, assignments and lectures; Students participate in courses for tests and exercises that teachers use in the course.',
        numberOfMember: 1,
        src: 'https://github.com/tranduy26913/Online_Examination_System_ReactJS',
        url: 'https://oes.vercel.app',
        tech: [
            {
                name: 'MERN Stack',
                img: mernStack
            },
            {
                name: 'Redux Toolkit',
                img: redux
            },

            {
                name: 'MaterialUI',
                img: mui
            }],
        features: [
            {
                name: 'Home',
                img: homeOES
            },
            {
                name: 'Course Management',
                img: oes1
            },
            {
                name: 'Exam Management',
                img: oes2
            },
            {
                name: 'Input exam information',
                img: oes3
            },
            {
                name: 'Create Question for Exam',
                img: oes4
            },
            {
                name: 'Create Assignment',
                img: oes5
            },
        ],
    },
    {
        id: 2,
        name: 'Light Novel Website',
        thumbnail: homeNovel,
        description: 'The story website provides a collection of stories for everyone. Users can upload stories to the website to share with other users.',
        numberOfMember: 1,
        src: 'https://github.com/tranduy26913/DoAnHDT_WebDocTruyenChu',
        url: 'https://thichtruyenchu.vercel.app',
        tech: [
            {
                name: 'MERN Stack',
                img: mernStack
            },
            {
                name: 'Typescript',
                img: 'https://img.icons8.com/fluency/96/null/typescript--v1.png'
            },
            {
                name: 'Zustand',
                img: 'https://react-tracked.js.org/img/react-tracked-logo.svg'
            },
            {
                name: 'React Query',
                img: reactQuery
            }],
        features: [
            {
                name: 'Home',
                img: homeNovel
            },
            {
                name: 'Novel Information',
                img: novel1
            },

            {
                name: 'Reading Chapter',
                img: novel2
            },
            {
                name: 'Profile User',
                img: novel3
            },
        ],
    },
    {
        id: 2,
        name: 'My Portfolio',
        thumbnail: homePortfolio,
        description: '',
        numberOfMember: 1,
        src: 'https://github.com/tranduy26913/portfolio',
        url: '',
        tech: [
            {
                name: 'VueJS',
                img: vue
            },
            {
                name: 'Tailwind',
                img: tailwind
            }],
        features: [],
    },
    {
        id: 2,
        name: 'Recruitment website',
        thumbnail: servlet,
        description: 'A web application that helps making search and apps accessible to each other frees up a huge amount of labor and helps recruiters get a quality workforce.',
        numberOfMember: 1,
        src: 'https://github.com/tranduy26913/JavaWeb_Servlet_JSP',
        url: '',
        tech: [
            {
                name: 'Java Servlet',
                img: servlet
            },
            {
                name: 'MongoDB',
                img: 'https://img.icons8.com/color/96/null/mongodb.png'
            }],
        features: [],
    },
    {
        id: 3,
        name: 'Library Management (Java Swing)',
        thumbnail: homeLib,
        description: 'The library management application is built using Java Swing. With features including book management, book lending, book return, librarian management, reader management.',
        numberOfMember: 2,
        src: 'https://github.com/tranduy26913/QuanLyThuVien_JavaSwing',
        
        tech: [
            {
                name: 'Java Swing',
                img: java
            },
            {
                name: 'MySQL',
                img: mySQL
            },
            ],
        features: [
            {
                name: 'Home',
                img: homeLib
            },
            {
                name: 'Book Management',
                img: lib1
            },

            {
                name: 'Reader Management',
                img: lib2
            },
            {
                name: 'Borrowing/returning books',
                img: lib3
            },
            {
                name: 'Personnel management',
                img: lib4
            },
            {
                name: 'Statistical',
                img: lib5
            },
        ],
    },
    {
        id: 3,
        name: 'Hotel Management (Winform App)',
        thumbnail: homeHotel,
        description: 'Hotel management application is built with Winform. With features including room management, reservation, check-out, food service management, staff management.',
        numberOfMember: 2,
        src: 'https://github.com/tranduy26913/QuanLyKhachSan',
        
        tech: [
            {
                name: 'C# Winform',
                img: csharp
            },
            {
                name: 'SQL Server',
                img: sql
            },
            ],
        features: [
            {
                name: 'Home',
                img: homeHotel
            },
            {
                name: 'Booking',
                img: hotel1
            },
            {
                name: 'Services',
                img: hotel2
            },
            {
                name: 'Employee assignment management',
                img: hotel3
            },
            {
                name: 'Revenue statistics',
                img: hotel4
            },
        ],
    },
    

]