export const mapPhotoModel = (model) => {
  return {
    id: model.id,
    secret: model.secret,
    server: model.server,
    title: model.title,
    descriptionContent: model.description?._content,
    owner: model.ownername,
    lastUpdate: model.lastupdate,
    originalWidth: model.o_width,
    originalHeight: model.o_height,
    largeWidth: model.width_l,
    largeHeight: model.height_l,
  }
}
