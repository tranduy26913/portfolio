import mernStack from '../assets/oes/mern.png'
import redux from '../assets/oes/redux.webp'
import mui from '../assets/oes/mui.png'
import homeOES from '../assets/oes/thumb.png'
import reactQuery from '../assets/novel/zustand.svg'
import homeLib from '../assets/library/thumb.jpg'
import mySQL from '../assets/library/mysql.png'
import homeNovel from '../assets/novel/thumb.jpg'
import java from '../assets/library/java.png'

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
        imgs: [
            {
                name: 'Home',
                img: homeOES
            },
            {
                name: 'Redux Toolkit',
                img: redux
            },

            {
                name: 'MaterialUI',
                img: mui
            }],
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
        imgs: [
            {
                name: 'Home',
                img: homeNovel
            },
            {
                name: 'Redux Toolkit',
                img: redux
            },

            {
                name: 'MaterialUI',
                img: mui
            }],
    },
    {
        id: 3,
        name: 'Library Management',
        thumbnail: homeLib,
        description: 'The story website provides a collection of stories for everyone. Users can upload stories to the website to share with other users.',
        numberOfMember: 1,
        src: 'https://github.com/tranduy26913/DoAnHDT_WebDocTruyenChu',
        
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
        imgs: [
            {
                name: 'Home',
                img: homeLib
            },
            {
                name: 'Redux Toolkit',
                img: redux
            },

            {
                name: 'MaterialUI',
                img: mui
            }],
    },
    

]