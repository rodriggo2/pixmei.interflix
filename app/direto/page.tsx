import Link from 'next/link';

const linkSections = [
  {
    title: "",
    links: [
      { label: "Acesse nosso Blog de Empreendedorismo aqui", url: "https://onedoctor.com.br" },
      { label: "E ainda mais conteúdos no nosso YouTube", url: "https://onedoctor.com.br" },
      { label: "Vagas para você fazer parte do time OneDoctor!", url: "https://onedoctor.com.br" },
    ]
  },
  {
    title: "Nossos Serviços",
    links: [
      { label: "Abra a sua empresa grátis", url: "https://onedoctor.com.br" },
      { label: "Troca de contabilidade", url: "https://onedoctor.com.br" },
      { label: "Contabilidade com gerente de conta", url: "https://onedoctor.com.br" },
    ]
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#7A1FA2] to-[#511370] text-white flex flex-col items-center justify-start px-5 py-10">
      <div className="w-full max-w-[460px] flex flex-col items-center">
        
        {/* HEADER INSTITUCIONAL */}
        <div className="flex flex-col items-center text-center mb-8">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide mb-1 text-white">
            OneDoctor Contabilidade Online
          </h1>
          <p className="text-xs md:text-sm font-medium text-purple-100 max-w-[340px] leading-relaxed opacity-90">
            A contabilidade inteligente para a área da saúde, impulsionando o seu consultório e sua carreira.
          </p>
        </div>

        {/* LISTAGEM DE SEÇÕES E BOTÕES */}
        <div className="w-full flex flex-col gap-5">
          {linkSections.map((section, index) => (
            <div key={index} className="flex flex-col w-full text-center">
              {section.title && (
                <h2 className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-3 mt-2">
                  {section.title}
                </h2>
              )}
              
              <div className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-gray-800 font-semibold text-[14px] md:text-[15px] py-4 px-4 rounded-xl shadow-sm hover:translate-y-[-1px] hover:shadow-md active:translate-y-0 transition-all duration-150 flex items-center justify-between text-left group"
                  >
                    <span className="leading-snug text-gray-700 font-medium">{link.label}</span>
                    <span className="text-gray-300 group-hover:text-gray-400 transition-colors font-bold text-base pr-1 select-none">⋮</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

