import mongoose from 'mongoose';

const fileSchema = new mongoose.Schema(
  {
    title:{
      type: String,
      default: null,
    },
    repositoryURL:{
      type: String,
      default: null,
    },
    
    uploadDate: {
      type: Date,
      default: Date.now,
    },
    googleId: {
      type: String, // or an ObjectId if linked to a user schema
      required: null,
    }, 
    userPicture:{
      type: String,
      default: null,
    },
    userName:{
      type: String,
      default: null,
    },

    files: {
      filename: {
        type: String,
        default: null,
      },
      fileType: {
        type: String,
        default: null,
        enum: ['pdf', 'docx', 'doc','ppt', 'pptx', 'image', 'video'],
      },
      mimetype: {
        type: String,
        default: null,
      },
      size: {
        type: Number,
        default: null,
      },
      uploadDate: {
        type: Date,
        default: Date.now,
      },
      metadata: {
        type: mongoose.Schema.Types.Mixed, // Additional info if needed
        default: {},
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const File = mongoose.model('File', fileSchema);

export default File;
