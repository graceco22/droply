"use client";

import { deleteProduct } from "@/app/actions";
import React, { useState } from "react";
import { toast } from "sonner";

const ProductCard = ({ product }) => {
  const [showChart, setShowChart] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (!confirm("Remove this product from tracking?")) return;

    setDeleting(true);
    const result = await deleteProduct(product.id);

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message || "Product removed successfully!");
      setUrl("");
    }
    setDeleting(false);
  };
  return <div>ProductCard</div>;
};

export default ProductCard;
