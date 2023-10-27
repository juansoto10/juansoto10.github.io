import { useState, useEffect, useRef } from 'react'

const useCloseByClickOutside = () => {
  const [open, setOpen] = useState(false)

  let menuRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false)
        console.log(menuRef.current)
      }
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })
}

export default useCloseByClickOutside
