import Gallery from "../../components/Gallery";
import { connect } from "react-redux";
import {
  fetchGalleryImagesAction,
  postCommentAction
} from "../../store/gallery";

const mapStateToProps = state => ({
  isLoading: state.main.isLoading,
  user: state.main.user,
  images: state.gallery.images,
  comments: state.gallery.comments
});

const mapDispatchToProps = {
  fetchGalleryImagesAction,
  postCommentAction
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
