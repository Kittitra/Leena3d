
const navLinks = [
  {
    name: "Header",
    link: "#header",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "footer",
    link: "#footer",
  },
];

const cardModelTopic = [
    {
        title: "Mesh",
        link: '/auth/mesh',
        imgUrl: '/images/Card-show1-ps.png'
    },
    {
        title: "UV",
        link: '/auth/uv',
        imgUrl: '/images/Card-show2.png'
    },
    {
        title: "Texture",
        link: '/auth/texture',
        imgUrl: '/images/Card-show3-ps.png'
    },
    {
        title: "Rig",
        link: '/auth/rig',
        imgUrl: '/images/Card-show4.png'

    },
    {
        title: 'Animation',
        link: '/auth/animation',
        imgUrl: '/images/Card-show5.png'

    },
    {
        title: 'Node',
        link: "/auth/node",
        imgUrl: '/images/Card-show6.png'
    }
]

const AboutData = [
  {
    title: 'Three.js',
    paragraph : 'Three.js เป็นไลบรารี JavaScript ข้ามเบราว์เซอร์และอินเทอร์เฟซการเขียนโปรแกรมแอปพลิเคชันที่ใช้สร้างและแสดงกราฟิกคอมพิวเตอร์ 3 มิติแบบเคลื่อนไหวในเว็บเบราว์เซอร์โดยใช้ WebGL',
    model: {
      url: '/models/three.js-transformed.glb',
      xlSize: 0.04,
      mdSize: 0.02,

    }
  },
  {
    title: 'Blender',
    paragraph : 'ซอฟต์แวร์เสรี สำหรับงานคอมพิวเตอร์กราฟิกสามมิติ สามารถใช้สร้าง โมเดลสามมิติ, คลี่ UV , ทำพื้นผิว (Texture), จัดการการเคลื่อนไหวแบบใช้กระดูก, จำลองการไหลของน้ำ, จำลองผิวหนัง, คอมพิวเตอร์แอนิเมชัน, เร็นเดอร์, พาทิเคิล, การจำลองด้วยคอมพิวเตอร์อื่นๆ, การตัดต่อและตบแต่งวีดิทัศน์และภาพผ่านระบบ คอมโพสิต, และยังใช้สร้างแอปพลิเคชันแบบสามมิติได้อีกด้วย',
    model: {
      url: '/models/blender-logo.glb',
      xlSize: 1,
      mdSize: 0.5,
    }
  },
]

const showcaseData = [
  {
    title: 'Texture piant',
    content: 'การใช้เครื่องมือแปรงระบายสีลงบน "วัสดุพื้นฐาน 3 มิติ" (3D Primitives) หรือโมเดล 3 มิติ เพื่อสร้างลวดลายและพื้นผิวที่มีมิติ',
    footerLink: 'https://docs.blender.org/manual/en/latest/sculpt_paint/texture_paint/index.html',
  },
  {
    title: 'Weigth Paint',
    content: 'การกำหนดน้ำหนักการเปลี่ยนแปลง (deformation) ในโมเดล 3 มิติ โดยใช้ "สี" แทนน้ำหนัก เพื่อให้ส่วนต่างๆ ของโมเดลเคลื่อนไหวตามโครงกระดูกได้อย่างเหมาะสม',
    footerLink: 'https://docs.blender.org/manual/en/latest/sculpt_paint/weight_paint/introduction.html',
  },
  {
    title: 'UV map',
    content: 'ภาพ 2 มิติที่แสดงพื้นผิวของวัตถุ 3 มิติ โดยกระบวนการนี้เรียกว่า UV Mapping หรือ Unwrapping.',
    footerLink: 'https://docs.blender.org/manual/en/latest/modeling/meshes/editing/uv.html',
  },
  {
    title: 'Node Material',
    content: 'ระบบที่ให้สร้างและปรับแต่งลักษณะพื้นผิว (material) ของวัตถุ โดยการ นำส่วนประกอบย่อยๆ ที่เรียกว่า "Nodes" มาเชื่อมต่อกัน เพื่อสร้างสูตรส่วนผสมของพื้นผิว.',
    footerLink: 'https://docs.blender.org/manual/en/latest/render/shader_nodes/output/material.html',
  },
  {
    title: 'Rig',
    content: 'การทำ Rigging ในแอนิเมชัน คือ กระบวนการสร้าง "โครงกระดูก" ดิจิทัลภายในโมเดล 3 มิติ เพื่อให้สามารถควบคุมการเคลื่อนไหว ท่าทาง และการกระทำของตัวละครหรือวัตถุนั้นๆ ได้อย่างอิสระ. ',
    footerLink: 'https://docs.blender.org/manual/en/latest/animation/introduction.html#rigging',
  },
]

const footerNav = [
  {
    title: 'Header',
    link: '#header'
  },
  {
    title: 'About',
    link: '#about'
  },
  {
    title: 'Contact',
    link: '#contact'
  }
]

import { CiInstagram, CiFacebook, CiLinkedin } from "react-icons/ci";

const footerLinks = [
  {
    title: 'Instagram',
    url: 'https://www.instagram.com/kittitharakawinan/',
    icon: CiInstagram
  },
  {
    title: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100032432491449',
    icon: CiFacebook
  },
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kittitra-kawinan-1b7b06380/',
    icon: CiLinkedin
  }

]

const pagesData = [
  {
    title: 'Mesh',
    content: 'คือ การสร้างแบบจำลอง 3 มิติที่ประกอบด้วยรูปหลายเหลี่ยม (โพลีกอน) โดยใช้จุดยอด (vertices), เส้นขอบ (edges), และหน้า (faces) มาเชื่อมต่อกันเพื่อสร้างรูปร่างของวัตถุในพื้นที่สามมิติ',
    mainImage: '/images/meshs-image.png',
    images: [
      '/images/mesh-image01.jpg',
      '/images/112.png'
    ],
    bottomImage: '/images/meshBottom-img.jpg',
    detail: [
      "จุดยอด (Vertices): เป็นจุดข้อมูลในพื้นที่ 3 มิติที่มีพิกัด (x, y, z) และมักจะเก็บข้อมูลอื่นๆ เช่น สี, พิกัดพื้นผิว (UV coordinates) หรือค่าความโค้งของพื้นผิว",
      "เส้นขอบ (Edges): คือส่วนของเส้นตรงที่เชื่อมต่อระหว่างจุดยอดสองจุดเข้าด้วยกัน",
      "หน้า (Faces): เป็นรูปทรงปิดที่เกิดจากการเชื่อมต่อกันของเส้นขอบ มักจะเป็นรูปสามเหลี่ยมหรือสี่เหลี่ยม"
    ],
    usable: [
      "กราฟิกคอมพิวเตอร์: ใช้สร้างตัวละคร, วัตถุ, และฉากในวิดีโอเกม, ภาพยนตร์แอนิเมชัน, และภาพจำลองเสมือนจริง",
      "การพิมพ์ 3 มิติ: ไฟล์โมเดลที่ใช้ในการพิมพ์ 3 มิติส่วนใหญ่จะอยู่ในรูปแบบของ 3D mesh"
    ],
    example: 'การสร้างโมเดล 3D mesh มักจะเริ่มต้นด้วยรูปทรงพื้นฐาน เช่น ลูกบาศก์หรือทรงกลม แล้วจึงค่อยๆ เพิ่มรายละเอียดโดยการแบ่งย่อย (subdivide) หน้าต่างๆ และปรับเปลี่ยนตำแหน่งของจุดยอดเพื่อให้ได้รูปทรงที่ซับซ้อนตามต้องการ'
  },
  {
    title: 'UV',
    content: 'คือ กระบวนการแปลงพื้นผิวสามมิติ (3D surface) ให้อยู่ในรูปแบบสองมิติ (2D) เพื่อใช้สำหรับการวางลวดลายหรือภาพพื้นผิว (texture mapping) ลงบนโมเดล 3 มิติ โดย U และ V เป็นแกนพิกัดของภาพ 2 มิติที่ใช้แทนแกน X และ Y',
    mainImage: '/images/uv-main.png',
    images: [
      '/images/uv-image01.jpg',
      '/images/uv-image02.jpg',
      '/images/uv-image03.jpg',
      '/images/uv-image04.jpeg',
    ],
    bottomImage: '/images/uvBottom-img.jpg',
    detail: [
      "การ Unwrap: เป็นขั้นตอนการคลี่โมเดล 3 มิติออกมาให้อยู่ในรูปแบบ 2 มิติ โดยเลือกตำแหน่งการตัด (seams) เพื่อให้การคลี่เป็นไปอย่างเหมาะสม",
      "พิกัด UV: คือชุดข้อมูลที่กำหนดว่าจุดยอด (vertex) แต่ละจุดบนโมเดลจะสอดคล้องกับพิกัดใดบนภาพ texture",
      "Seams: เส้นตัดบนโมเดลที่บอกให้โปรแกรมรู้ว่าควรจะแยกชิ้นส่วน mesh ตรงไหนเวลาแปลงเป็น UV"
    ],
    usable: [
      "การสร้าง texture สำหรับโมเดล 3 มิติ: ช่วยให้นักออกแบบวาดลวดลายลงบนภาพ 2 มิติแล้วนำไป wrap กับโมเดล 3 มิติได้",
      "งานเกมและอนิเมชัน: ใช้ UV เพื่อวางภาพ texture เช่น ผิวหนัง เสื้อผ้า หรือรายละเอียดพื้นผิว",
      "การ bake ข้อมูล: เช่น normal map, ambient occlusion map หรือ lightmap จำเป็นต้องใช้ UV coordinates"
    ],
    example: 'การสร้างโมเดลตัวละครในเกม มักต้องมีการทำ UV unwrap เพื่อให้สามารถทาสีหรือใส่ลวดลายบนเสื้อผ้าและใบหน้าได้อย่างแม่นยำ'
  },
  {
    title: 'Texture',
    content: 'คือ ภาพหรือข้อมูลที่ถูกนำมาใช้ในการกำหนดลักษณะพื้นผิวของโมเดล 3 มิติ เช่น สี ความขรุขระ ความสะท้อน หรือความโปร่งใส เพื่อให้วัตถุในโลก 3 มิติดูสมจริงมากขึ้น',
    mainImage: '/images/texture-image.jpg',
    images: [
      '/images/texture-image01.jfif',
      '/images/texture-image02.jpg',
      '/images/texture-image03.PNG'
    ],
    bottomImage: '/images/textureBottom.jpg',
    detail: [
      "Diffuse Map (Albedo): ใช้กำหนดสีพื้นฐานของพื้นผิว",
      "Normal Map: ใช้สร้างรายละเอียดเล็กๆ ของพื้นผิว เช่น รอยนูน รอยบุ๋ม โดยไม่ต้องเพิ่ม polygon",
      "Specular/Gloss Map: ใช้กำหนดความเงาและการสะท้อนของแสง",
      "Displacement Map: ใช้ปรับเปลี่ยนรูปทรงจริงของพื้นผิวตามค่าในภาพ",
      "Transparency/Alpha Map: ใช้กำหนดความโปร่งใสของบางส่วนของโมเดล"
    ],
    usable: [
      "เกมและภาพยนตร์: เพิ่มความสมจริงให้กับโมเดลโดยไม่ต้องเพิ่มจำนวน polygon",
      "การเรนเดอร์สถาปัตยกรรม: ใช้ texture เพื่อสร้างผิววัสดุ เช่น ไม้ หิน คอนกรีต",
      "งานออกแบบผลิตภัณฑ์: ใช้แสดงตัวอย่างวัสดุจริงของสินค้า"
    ],
    example: 'โมเดลเก้าอี้สามารถใช้ texture ไม้สำหรับพื้นผิว, texture หนังสำหรับเบาะ และ normal map สำหรับรายละเอียดรอยเย็บ'
  },
  {
      title: 'Rig',
      content: 'คือ กระบวนการสร้างโครงกระดูกเสมือน (armature หรือ skeleton) ให้กับโมเดล 3 มิติ เพื่อใช้ควบคุมการเคลื่อนไหวหรือการจัดท่าทาง (pose) ของโมเดลนั้น',
      mainImage: '/images/rig-image.jpg',
      images: [
        '/images/rig-image01.png',
        '/images/rig-image02.jpg'
      ],
      bottomImage: '/images/rigBottom-img.jpg',
      detail: [
        "Armature: โครงสร้างกระดูกที่ประกอบด้วย bone หลายๆ ชิ้น",
        "Bone: หน่วยพื้นฐานของ rig ใช้ควบคุมการเคลื่อนที่และการหมุนของส่วนต่างๆ",
        "Skinning/Weight Painting: กำหนดว่าส่วนของ mesh จะได้รับอิทธิพลจาก bone ใดและมากน้อยแค่ไหน",
        "Inverse Kinematics (IK): ระบบควบคุมที่ทำให้การเคลื่อนไหวของ bone เป็นไปตามลักษณะการเคลื่อนไหวตามธรรมชาติ"
      ],
      usable: [
        "แอนิเมชันตัวละคร: ใช้ทำให้ตัวละครเดิน วิ่ง หรือแสดงอารมณ์",
        "งานภาพยนตร์และโฆษณา: ใช้ rig เพื่อขยับโมเดลในฉากเสมือนจริง",
        "เกม: ใช้ rig สำหรับการควบคุมการเคลื่อนไหวของตัวละครในเกมแบบ real-time"
      ],
      example: 'การทำ rig ตัวละครมนุษย์จะสร้าง bone สำหรับแขน ขา ลำตัว และใบหน้า จากนั้นจึงปรับ weight painting ให้ mesh เคลื่อนไหวตามอย่างเป็นธรรมชาติ'
  },
  {
      title: 'Animation',
      content: 'คือ กระบวนการสร้างการเคลื่อนไหวให้กับโมเดล 3 มิติ โดยใช้ keyframe, motion capture หรือ procedural animation เพื่อให้วัตถุหรือฉากมีชีวิตชีวา',
      mainImage: '/images/animation-image.jpg',
      images: [
        '/images/animation-image01.jpg',
        '/images/animation-image02.png'
      ],
      bottomImage: '/images/animationBottom-img.jpg',
      detail: [
        "Keyframe Animation: การกำหนดค่าเริ่มต้นและสิ้นสุด จากนั้นซอฟต์แวร์จะสร้างการเคลื่อนไหวระหว่างเฟรมให้อัตโนมัติ",
        "Motion Capture: การบันทึกการเคลื่อนไหวจากนักแสดงแล้วนำมาใช้กับโมเดล 3 มิติ",
        "Shape Keys (Morph Targets): ใช้ปรับรูปร่างของโมเดล เช่น การขยับปากหรือสีหน้า",
        "Physics Simulation: การใช้กฎฟิสิกส์จำลอง เช่น แรงโน้มถ่วง การชนกัน หรือผ้า"
      ],
      usable: [
        "แอนิเมชันในภาพยนตร์และเกม: ทำให้ตัวละครดูสมจริงและมีชีวิตชีวา",
        "สื่อการเรียนการสอน: ใช้ทำแอนิเมชันอธิบายกระบวนการทางวิทยาศาสตร์หรือวิศวกรรม",
        "งานโฆษณา: ใช้ทำ motion graphics และ visual effects"
      ],
      example: 'การทำให้ลูกบอลเด้ง สามารถใช้ keyframe กำหนดตำแหน่งสูงสุดและต่ำสุด แล้ว Blender จะคำนวณการเคลื่อนไหวระหว่างเฟรมให้ แต่ต้องใช้ทฤษฏี animation เข้ามาช่วยเพื่อเพิ่มความน่าสนใจ '
  },
  {
      title: 'Node',
      content: 'คือ ระบบการทำงานแบบเชื่อมโยง (node-based workflow) ใน Blender ที่ใช้ในการสร้างวัสดุ (materials), คอมโพสิท (compositing), และการสร้างเอฟเฟกต์ต่างๆ โดยการเชื่อมโยง input และ output ของ node เข้าด้วยกัน',
      mainImage: '/images/node-image.jpg',
      images: [
        '/images/node-image01.jpg',
        '/images/node-image02.webp'
      ],
      bottomImage: '/images/nodeBottom-img.jpg',
      detail: [
        "Shader Nodes: ใช้สร้างและปรับแต่งวัสดุ เช่น สี ความสะท้อน ความโปร่งใส",
        "Texture Nodes: ใช้สร้างลวดลายหรือพื้นผิว",
        "Compositing Nodes: ใช้รวมและปรับแต่งภาพหลังการเรนเดอร์ เช่น ใส่เอฟเฟกต์แสง สี หรือเบลอ",
        "Geometry Nodes: ใช้สร้างและปรับเปลี่ยน mesh แบบ procedural โดยไม่ต้องแก้ไขโมเดลด้วยมือ"
      ],
      usable: [
        "การสร้างวัสดุที่ซับซ้อน เช่น โลหะ ไม้ หิน โดยใช้ Shader Nodes",
        "การทำ VFX: ใช้ Compositing Nodes เพื่อปรับแต่งภาพเรนเดอร์",
        "การสร้าง generative art หรือการกระจายวัตถุด้วย Geometry Nodes"
      ],
      example: 'การทำพื้นผิวโลหะ สามารถใช้ node หลายตัว เช่น Principled BSDF, Noise Texture, และ Bump Map เชื่อมต่อเข้าด้วยกันเพื่อสร้างผลลัพธ์ที่สมจริง'

  }
]

export 
{
    cardModelTopic, 
    navLinks,
    AboutData,
    showcaseData,
    footerNav,
    footerLinks,
    pagesData
}