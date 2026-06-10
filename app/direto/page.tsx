import Link from 'next/link';

// Fusão e mapeamento completo de todas as seções e links solicitados
const linkSections = [
  {
    title: "", // Primeira seção sem título visível conforme o modelo Agilize
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
  },
  {
    title: "Você Só Encontra Aqui",
    links: [
      { label: "Agilize Multibenefícios | Para seu CNPJ", url: "https://onedoctor.com.br" },
    ]
  },
  {
    title: "Nossas Ferramentas Gratuitas",
    links: [
      { label: "Calculadora CLT x PJ", url: "https://onedoctor.com.br" },
      { label: "Consulta de CNAE", url: "https://onedoctor.com.br" },
    ]
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#7A1FA2] to-[#4A148C] text-white flex flex-col items-center justify-start px-5 py-10 selection:bg-purple-300 selection:text-purple-900">
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
              {/* Renderiza o título da seção se ele existir */}
              {section.title && (
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#E1BEE7] mb-3 mt-2">
                  {section.title}
                </h2>
              )}
              
              {/* Container de Botões */}
              <div className="flex flex-col gap-3">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white text-[#333333] font-semibold text-[14px] md:text-[15px] py-4 px-5 rounded-xl shadow-md hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 transition-all duration-200 flex items-center justify-between text-left group"
                  >
                    <span className="leading-snug font-semibold">{link.label}</span>
                    {/* Indicador visual de menu lateral (Três Pontinhos) */}
                    <span className="text-gray-300 group-hover:text-gray-500 transition-colors font-bold text-base pr-1 select-none">
                      ⋮
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RODAPÉ COM REDES SOCIAIS (SVGs Nativos Otimizados) */}
        <div className="flex justify-center items-center gap-6 mt-10">
          {/* Instagram */}
          <Link href="https://instagram.com" target="_blank" className="text-white hover:opacity-80 transition-opacity" aria-label="Instagram">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </Link>
          {/* YouTube */}
          <Link href="https://youtube.com" target="_blank" className="text-white hover:opacity-80 transition-opacity" aria-label="YouTube">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 Pem.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>
          {/* LinkedIn */}
          <Link href="https://linkedin.com" target="_blank" className="text-white hover:opacity-80 transition-opacity" aria-label="LinkedIn">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </Link>
          {/* TikTok */}
          <Link href="https://tiktok.com" target="_blank" className="text-white hover:opacity-80 transition-opacity" aria-label="TikTok">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31 0 2.583.396 3.654 1.134.123.085.204.225.215.374.053.71.303 1.39.73 1.968.56.756 1.362 1.306 2.278 1.564.152.043.258.18.258.339v3.195c0 .204-.176.365-.378.347-1.124-.104-2.18-.548-3.04-1.272V14.5a6.5 6.5 0 1 1-7-6.464c.248-.02.497-.02.744 0a.35.35 0 0 1 .322.348v3.155c0 .185-.14.34-.323.354a3 3 0 1 0 3.23 2.977V.367c0-.192.155-.348.348-.348h3.167z"/></svg>
          </Link>
        </div>

      </div>
    </div>
  );
}
