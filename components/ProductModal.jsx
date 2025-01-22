"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function ProductModal({ product, isOpen, setIsOpen }) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <Image
            src={product.imageSrc || "/placeholder.svg"}
            alt={product.title}
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <DialogDescription className="mt-4 text-base">
          <h3 className="font-semibold mb-2">Description:</h3>
          <p>{product.description}</p>

          {product.features && product.features.length > 0 && (
            <div>
              <h3 className="font-semibold mt-4 mb-2">Key Features:</h3>
              <ul className="list-disc pl-5">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.applications && (
            <div>
              <h3 className="font-semibold mt-4 mb-2">Applications:</h3>
              <p>{product.applications}</p>
            </div>
          )}
        </DialogDescription>
        <div className="mt-6">
          <a
            href={`https://wa.me/971504085867?text=Hello, I'm interested in the ${product.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <Button className="w-full bg-[rgb(142,22,22)] text-white hover:bg-[rgb(122,2,2)]">Enquire Now</Button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  )
}
