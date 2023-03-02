import AnchorLink from "react-anchor-link-smooth-scroll"

const DotGroup = ({selectedPage, setSelectedPage}) => {
  const selectedStyles = `relative bg-purple before:absolute before:w-6 before:h-6 
  before:rounded-full before:border-2 before:border-purple before:left-[-50%]
  before:top-[-50%]`

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
       <AnchorLink
          className={`${selectedPage === 'home' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href='#home'
          onClick={() => setSelectedPage('home')}
        />
        <AnchorLink
          className={`${selectedPage === 'habilidades' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href='#habilidades'
          onClick={() => setSelectedPage('habilidades')}
        />
        <AnchorLink
          className={`${selectedPage === 'projetos' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href='#projetos'
          onClick={() => setSelectedPage('projetos')}
        />
        <AnchorLink
          className={`${selectedPage === 'testimonials' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href='#testimonials'
          onClick={() => setSelectedPage('testimonials')}
        />
        <AnchorLink
          className={`${selectedPage === 'contact' ? selectedStyles : "bg-dark-grey"}
          w-3 h-3 rounded-full`}
          href='#contact'
          onClick={() => setSelectedPage('contact')}
        />
    </div>
  )
}

export default DotGroup