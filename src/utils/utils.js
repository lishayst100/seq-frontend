//export const BASE_URL = 'http://localhost:3001/api';
//export const BASE_URL = "https://server-seq.onrender.com/api";
export const BASE_URL = 'https://server-ashen-psi.vercel.app/api'
export const transitionNavbar = 1.2;

export const links = [
  { title: "Projects", link: "/" },
  { title: "Reel", link: "/#reel" },
  { title: "About", link: "/about" },
  {title:'Instagram',link: 'https://www.instagram.com/dvir.aviram.seq'},
  {title:'Facebook',link: 'https://www.facebook.com/dvir.aviram.seq'},
  {title:'Vimeo',link: 'https://vimeo.com/dviraviram'},
  {title:'LinkeIn',link: 'https://www.linkedin.com/company/92740534/admin/feed/posts/'}
];


export const convertBaseImg = (img) => {
  return img.split("").slice(0, 33).join("");
}

export const convertSrcImg = (img) => {
  return img.split("").slice(33, img.length).join("");
}


//https://server-seq.onrender.com/
