import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
      enum: ['pdf', 'docx', 'doc', 'image', 'video'],
    },
    mimetype: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    uploadDate: {
      type: Date,
      default: Date.now,
    },
    uploader: {
      type: String, // or an ObjectId if linked to a user schema
      required: false,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed, // Additional info if needed
      default: {},
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const File = mongoose.model('File', fileSchema);

export default File;
