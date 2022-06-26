import "./sidebar.css"
import "../../Utils/styles.css"

export default function Sidebar(){
    return(
        <aside class="side-bar">
        <div>
          <i class="fa-solid fa-house fa-lg"></i>
          <span>Home</span>
        </div>
        <div>
          <i class="fa-solid fa-heart fa-lg"></i>
          <span>Liked Videos</span>
        </div>
        <div>
          <i class="fa-solid fa-list-check fa-lg"></i>
          <span>Playlist</span>
        </div>
        <div>
          <i class="fa-solid fa-clock-rotate-left fa-lg"></i>
          <span>History</span>
        </div>
        <div>
          <i class="fa-regular fa-clock fa-lg"></i>
          <span>Watch Later</span>
        </div>
      </aside>
    )
}