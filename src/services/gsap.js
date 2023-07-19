import gsap from 'gsap'



const scrollTrigger = (classElem, triggerElem, setting) => {
   gsap.from(classElem, {
      delay: 0.2, 
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         start: "top 95%",
         end: "top 50%",
         // markers: true,
         scrub: 2,
      }
   });
};

const scrollTriggerFooter = (classElem, triggerElem, setting) => {
   gsap.from(classElem, {
      delay: 0.2, 
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         start: "top 100%",
         end: "top 80%",
         // markers: true,
         scrub: 2,
      }
   });
};

const scrollTriggerItems = async (classElems, triggerElem, setting) => {
   await gsap.from(classElems, {
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         // markers: true,
         start: "top 95%",
         end: "bottom 60%",
         scrub: 1.5
       }
   });
};

const scrollTriggerItems2 = async (classElems, triggerElem, setting) => {
      await gsap.from(classElems, {
      opacity: 0,
      stagger: 0.2,
      duration: 0.5,
      ease: 'power3.out',
      ...setting,
      scrollTrigger: {
         trigger: triggerElem,
         // markers: true,
         start: "top 95%",
         end: "80% 60%",
         scrub: 1.5
      }
   });
};

export { scrollTrigger, scrollTriggerItems, scrollTriggerItems2, scrollTriggerFooter }