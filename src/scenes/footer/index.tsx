import Logo from "@/assets/Logo.png"

const Footer = () => {
  return (
    <footer className="py-16 bg-primary-100">
      <div className="md:flex mx-auto w-5/6 justify-between gap-16">
        <div className="mt-16 md:mt-0 basis-1/2">
          <img src={Logo} alt="logo" />
          <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt distinctio totam voluptatibus voluptas quibusdam, sed esse? Laudantium, itaque possimus! Nulla!</p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Elit quidem optio.</p>
          <p className="my-5">Et gravida id et etiame.</p>
          <p>Samet consectetur</p>
        </div>
        <div className="mt-16 md:mt-0 basis-1/4">
          <h4 className="font-bold">Contuct Us</h4>
          <p className="my-5">Lorem ipsum dolor sit amet consectetur.</p>
          <p className="my-5">+9(933)763-00-90</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;