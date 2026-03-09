import { useState } from "react"
import { doc, setDoc } from "firebase/firestore"
import { projectFirestore } from "../firebase/config"
import {  updateProfile } from "firebase/auth"
import { useGetOrCreateUser } from "./useGetOrCreateUser"

export const useCompleteForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [getUser, setGetUser] = useState(null)
  const { getOrCreateUser } = useGetOrCreateUser();

  const handleForm = async ({ displayName, thumbnail }) => {
    
    setError(null)
    setLoading(true)

    try {

      const user = await getOrCreateUser()

      // Guards first
      if (!displayName?.trim()) {
        throw new Error("Display name is required")
      }

      if (!thumbnail || !(thumbnail instanceof File)) {
        throw new Error("Profile image is required")
      }

      // Upload image to Cloudinary
      const data = new FormData()
      data.append("file", thumbnail)
      data.append("upload_preset", "avarta-images")
      data.append("folder", "thumbnails")

      const uploadRes = await fetch(
        "https://api.cloudinary.com/v1_1/dijrf7tz8/image/upload",
        { method: "POST", body: data }
      )

      const uploadText = await uploadRes.text()

      if (!uploadRes.ok) {
        console.error("Cloudinary error:", uploadText)
        throw new Error("Image upload failed")
      }

      const uploadPath = JSON.parse(uploadText)
      const imgUrl = uploadPath.secure_url

      if (!imgUrl) {
        throw new Error("Invalid image URL returned")
      }

      // Update Firebase Auth profile
      await updateProfile(user, {
        displayName,
        photoURL: imgUrl,
      })

      // await user.reload()
      // const refreshedUser = projectAuth.currentUser

      // Save Firestore user (NO undefined)
      await setDoc(doc(projectFirestore, "users", user.uid), {
        displayName,
        photoURL: imgUrl,
      })

      setGetUser(user)
      window.location.replace('/account-home');


      
    } catch (err) {
      console.error("ERROR:", err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { error, loading, getUser, handleForm }
}
