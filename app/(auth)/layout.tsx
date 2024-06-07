const Layout = ({ children }: { children: React.ReactNode}) => {
     return (
          <div className="flex-center min-h-screen w-full bg-dotted-pattern bg-primary-50 bg-cover bg-fixed bg-center">
               { children }
          </div>
     )
}

export default Layout;