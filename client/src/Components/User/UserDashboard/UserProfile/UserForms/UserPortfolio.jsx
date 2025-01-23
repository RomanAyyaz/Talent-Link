import React from "react";
import {Link} from 'react-router-dom'
import { useUserStore } from "../../../../../Store/UserStore";
import { Image, Trash2, Edit } from 'lucide-react'
import {useMutation, useQueryClient} from "@tanstack/react-query"
import { deleteUserProjectApi } from "../../UserApi";
function UserPortfolio() {
    let {user} = useUserStore();
  return (
    <div className="bg-white w-full text-start px-3 md:px-8 rounded-md mt-6 py-4">
      <h1 className="text-lg text-black font-medium">My Portfolio</h1>
      <div className="border-b-2 bg-gray-400 mt-4"></div>

      <p className="my-2 text-neutral-400">Showing {user.projects.length} projects</p>
      <div className="flex gap-6 justify-center items-center flex-wrap">
        {
            user.projects.map((project,index)=>{
                return(
                    <ProjectCard project = {project}  />
                )
            })
        }
      </div>

      <Link to={'/UserDashboard/addPortfolio'}>
      <button className=" px-3.5 py-2.5 border border-gray-300 rounded-md mt-4 hover:bg-green-500 hover:text-white transition-colors duration-300">
        Add Portfolio
      </button>
      </Link>
    </div>
  );
}

export default UserPortfolio;

function ProjectCard({project}) {
  let {user} = useUserStore();
  let queryClient = useQueryClient();
    let deleteProjectMutation = useMutation({
      mutationFn:deleteUserProjectApi,
      onSuccess:()=>{
        //queryClient.invalidateQueries('user');
        console.log('User project deleted Successfully')
      },
      onError:()=>{
        console.log('Some error in deleting the project')
      }
    })
    return (
      <div className="w-2/5 rounded-lg overflow-hidden bg-white shadow-lg group">
        {/* Project Image Container */}
        <div className="relative">
          <img
            src="https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
            alt="Clothing Store Project Preview"
            className="w-full h-[240px] object-cover"
          />
          {/* Image Counter Badge */}
          <div className="absolute bottom-3 right-3 bg-green-800/90 text-white px-2 py-1 rounded flex items-center gap-1">
            <Image className="w-4 h-4" />
            <span>{project.projectImages.length}</span>
          </div>
          {/* Hover Icons */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
              <Edit className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100" 
            onClick={()=>{
              deleteProjectMutation.mutate({
                userId: user._id,
                projectId: project._id
              }
              )
            }}>
              <Trash2 className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
  
        {/* Project Info */}
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {project.projectName}
          </h2>
          <p className="text-gray-600">
            Developed a responsive and user-friendly clothing e-commerce website using the MERN stack
          </p>
        </div>
      </div>
    )
  }

