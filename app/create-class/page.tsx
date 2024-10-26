"use client";

import { VariantSchema } from "@/types/variant-schema";
import { useFieldArray, useFormContext } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { UploadDropzone } from "@/app/api/uploadthing/upload";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reorder } from "framer-motion";
import { useState } from "react";
import {useAction} from 'next-safe-action/hooks'
import { createClass } from "@/server/actions/class";

export default function () {



    const {execute, status, result} =  useAction(createClass, {
        onSuccess(data){
            if(data?.error) alert(data.error);
            if(data?.success) alert(data.success);
        },
        onError(error){
            console.log(error)
            alert("ERROR")
        }
    })

    const handleSubmit = () => {
        console.log("HERE")
        execute({courseTitle:"test1", courseDescription:"test2", courseCode:"cs205", courseSyllabus:"syllabus"});
    }


  const [step, setStep] = useState(0);
  return (
    <div>
      {step == 0 && (
        <div>
          <div>
            <p>Do you have a sylobbus </p>
            <UploadDropzone
              className="ut-allowed-content:text-secondary-foreground ut-label:text-primary ut-upload-icon:text-primary/50 hover:bg-primary/10 transition-all ease-in-out border-secondary ut-button:bg-primary/75 ut-button:ut-readying:bg-secondary"
              onUploadError={(error) => {
                console.log("ERROR");
              }}
              onBeforeUploadBegin={(files) => {
                // files.map((file) =>
                //   append({
                //     name: file.name,
                //     size: file.size,
                //     url: URL.createObjectURL(file),
                //   })
                // )
                return files;
              }}
              onClientUploadComplete={(files) => {
                console.log("SUCCESS");
                setStep(1);
                // images.map((field, imgIDX) => {
                //     if(field.url.search("blob:") === 0){
                //         const image = files.find((img) => img.name === field.name);
                //         if(image){
                //             update(imgIDX, {
                //                 url: image.url,
                //                 name: image.name,
                //                 size: image.size,
                //                 key: image.key
                //             })
                //         }
                //     }
                // })
                return;
              }}
              config={{ mode: "auto" }}
              endpoint="variantUploader"
            />
          </div>
          <div>
            <Button onClick={() => setStep(1)} variant={"outline"}>or Skip</Button>
          </div>
        </div>
      )}
      {step === 1 && 
        <div>
            <div className="flex flex-col w-1/4">
                <label>course title</label>
                <input placeholder="course title"></input>
            </div>

            <div className="flex flex-col w-1/4 mt-2">
                <label>course description</label>
                <input placeholder="course description"></input>
            </div>

            <div className="flex flex-col w-1/4 mt-2">
                <label>course code</label>
                <input placeholder="course code"></input>
            </div>
            <Button variant={'outline'} onClick={() => setStep(0)} className="mt-2">Go back</Button>
            <Button onClick={() => handleSubmit()} className="mt-2 ml-2">Create the class</Button>
        </div>
      }
    </div>
  );
}
