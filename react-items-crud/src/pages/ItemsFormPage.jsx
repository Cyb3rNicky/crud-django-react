import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createItem, deleteItem, updateItem, getItem } from "../api/items.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function ItemsFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateItem(params.id, data);
      toast.success("Item Actualizado con Éxito", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createItem(data);
      toast.success("Item Creado con Éxito", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/items");
  });

  useEffect(() => {
    async function loadItem() {
      if (params.id) {
        const { data } = await getItem(params.id);
        setValue("nombre", data.nombre);
        setValue("id_padre", data.id_padre);
      }
    }
    loadItem();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <textarea
          rows="3"
          placeholder="Nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.nombre && <span>this field is required</span>}

        <input
          type="text"
          placeholder="Id_padre"
          {...register("id_padre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.id_padre && <span>this field is required</span>}
        <button className="bg-indigo-700 p-3 rounded-lg block w-full mt-3">
          Save
        </button>
      </form>

      {params.id && (
        <div className="flex justify-center">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("Are you sure?");
              if (accepted) {
                await deleteItem(params.id);
                toast.success("Item Eliminado con Éxito", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/items");
              }
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
