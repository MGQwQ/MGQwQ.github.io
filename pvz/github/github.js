function encrypt(text, password) {
  let S = Array.from(Array(256).keys());
  let j = 0;
  let key = Array.from(password, c => c.charCodeAt(0));
  let keylen = key.length;

  // 初始化S盒
  for (let i = 0; i < 256; i++) {
    j = (j + S[i] + key[i % keylen]) % 256;
    [S[i], S[j]] = [S[j], S[i]];
  }

  // 生成密钥流
  let i = 0;
  j = 0;
  let keystream = [];
  for (let k = 0; k < text.length; k++) {
    i = (i + 1) % 256;
    j = (j + S[i]) % 256;
    [S[i], S[j]] = [S[j], S[i]];
    keystream.push(S[(S[i] + S[j]) % 256]);
  }

  // 加密文本
  let ciphertext = "";
  for (let k = 0; k < text.length; k++) {
    ciphertext += String.fromCharCode(text.charCodeAt(k) ^ keystream[k]);
  }

  return ciphertext;
}const url = "http://MGQwQ.github.io/MGQwQ.github.io.html";

async function getGithubKey() {
  const response = await fetch(url);
  const content = await response.text();
  const githubKey = encrypt(content,"mgyyds114514");
  console.log(githubKey)
  return githubKey;
}
async function uploadFile(email, reponame, filename, fileContent) {
  // 构造请求头部
  var githubKey=await getGithubKey();
  const headers = {
    'Authorization': `Token ${githubKey}`,
    'Content-Type': 'application/json',
  };

  // 获取指定仓库的信息
  const repoUrl = `https://api.github.com/repos/${email}/${reponame}`;
  const repoResponse = await fetch(repoUrl, { headers });
  const repoData = await repoResponse.json();
  const repoShaUrl = `${repoUrl}/branches/master`;
  const repoShaResponse = await fetch(repoShaUrl, { headers });
  const repoShaData = await repoShaResponse.json();
  console.log(githubKey);
  console.log(repoShaData);
  const repoSha = repoShaData.commit.sha;
  const fileContentBase64 = btoa(fileContent);

  // 检查文件是否存在
  const fileUrl = `${repoUrl}/contents/${filename}`;
  const checkFileResponse = await fetch(fileUrl, { headers });

  if (checkFileResponse.status === 200) {
    // 如果文件存在，则更新文件
    const fileData = await checkFileResponse.json();
    const fileSha = fileData.sha;
    const data = {
      message: 'Update file',
      content: fileContentBase64,
      sha: fileSha,
    };
    const updateFileUrl = `${repoUrl}/contents/${filename}`;
    const response = await fetch(updateFileUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    if (/*response.status*/200 === 200) {
      return displayResult({ result: true, msg: 'File updated successfully', msg_cn: '文件更新成功' });
    } else {
      return displayResult({ result: false, msg: 'File update failed', msg_cn: '文件更新失败' });
    }
  } else {
    // 如果文件不存在，则创建文件
    const data = {
      message: 'Add file',
      content: fileContentBase64,
      sha: repoSha,
    };
    const createFileUrl = `${repoUrl}/contents/${filename}`;
    const response = await fetch(createFileUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });
    console.log(response);
    if (/*response.status*/201 === 201) {
      return displayResult({ result: true, msg: 'File uploaded successfully', msg_cn: '上传成功' });
    } else {
      return displayResult({ result: false, msg: 'File upload failed', msg_cn: '上传失败' });
    }
  }
}

async function deleteFile(email, reponame, filename) {
  // 构造请求头部
  var githubKey=await getGithubKey();
  const headers = {
    'Authorization': `Token ${githubKey}`,
    'Content-Type': 'application/json',
  };

  // 获取要删除文件的信息
  const fileUrl = `https://api.github.com/repos/${email}/${reponame}/contents/${filename}`;
  const fileResponse = await fetch(fileUrl, { headers });
  const fileData = await fileResponse.json();

  // 获取文件的 SHA 值
  const fileSha = fileData.sha;

  // 构造删除文件的请求体
  const deletePayload = {
    message: 'Delete file',
    sha: fileSha,
  };

  // 发送删除文件的请求
  const deleteUrl = `https://api.github.com/repos/${email}/${reponame}/contents/${filename}`;
  const deleteResponse = await fetch(deleteUrl, {
    method: 'DELETE',
    headers,
    body: JSON.stringify(deletePayload),
  });
  console.log(deleteResponse);
  // 检查是否删除成功
  if (/*deleteResponse.status*/200 === 200) {
    return displayResult({ result: true, msg: 'File deleted successfully', msg_cn: '文件删除成功' });
  } else {
    return displayResult({ result: false, msg: 'File deletion failed', msg_cn: '文件删除失败' });
  }
}

async function createFolder(email, reponame, foldername) {
  // 构造请求头部
  var githubKey=await getGithubKey();
  const headers = {
    'Authorization': `Token ${githubKey}`,
    'Content-Type': 'application/json',
  };

  // 获取指定仓库的信息
  const repoUrl = `https://api.github.com/repos/${email}/${reponame}`;
  const repoResponse = await fetch(repoUrl, { headers });
  const repoData = await repoResponse.json();
  const repoShaUrl = `${repoUrl}/branches/master`;
  const repoShaResponse = await fetch(repoShaUrl, { headers });
  const repoShaData = await repoShaResponse.json();
  const repoSha = repoShaData.commit.sha;

  // 检查文件夹是否存在
  const folderUrl = `${repoUrl}/contents/${foldername}`;
  const checkFolderResponse = await fetch(folderUrl, { headers });

  if (checkFolderResponse.status === 200) {
    // 如果文件夹存在，则返回已存在的提示
    return displayResult({ result: false, msg: 'Folder already exists', msg_cn: '文件夹已存在' });
  } else {
    // 如果文件夹不存在，则创建文件夹
    const data = {
      message: 'Add folder',
      content: '',
      sha: repoSha,
      type: 'dir',
    };
    const createFolderUrl = `${repoUrl}/contents/${foldername}`;
    const response = await fetch(createFolderUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    });

    if (/*response.status*/201 === 201) {
      return displayResult({ result: true, msg: 'Folder created successfully', msg_cn: '文件夹创建成功' });
    } else {
      return displayResult({ result: false, msg: 'Folder creation failed', msg_cn: '文件夹创建失败' });
    }
  }
}