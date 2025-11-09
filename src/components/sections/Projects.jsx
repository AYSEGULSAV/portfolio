export const Projects =()=>{
 return(
    <section
    id="projects"
    className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8  bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
                {" "} Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <h3> Cloud Platform</h3>
                <p>Scalable cloud infrastructure management with real-time monitoring and automated scaling</p>
            </div>
            {["Ract", "Node.js","AWS","Docker"].map((tech,key)=>(
             <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                        hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                            {tech}

            </span>

            )

            )}

        </div>
        
    </section>
 );
}